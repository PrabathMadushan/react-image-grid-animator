import { useCallback, useEffect, useRef } from "react";

const noop = (): void => {};

type EmptyCallback = () => void;

export type IntervalHookCallback = (ticks?: number) => void;
export type IntervalHookFinishCallback = () => void;
export type IntervalHookStartMethod = EmptyCallback;
export type IntervalHookStopMethod = (triggerFinishCallback?: boolean) => void;
export type IntervalHookIsActiveMethod = () => boolean;
export interface IntervalHookOptions {
  onFinish?: IntervalHookFinishCallback;
  autoStart?: boolean;
  immediate?: boolean;
  selfCorrecting?: boolean;
}

export type IntervalHookResult = {
  start: IntervalHookStartMethod;
  stop: IntervalHookStopMethod;
  isActive: IntervalHookIsActiveMethod;
};

export function useInterval(
  callback: IntervalHookCallback,
  interval = 1000,
  {
    onFinish = noop,
    autoStart = true,
    immediate = false,
    selfCorrecting = true,
  }: IntervalHookOptions = {}
): IntervalHookResult {
  const timer = useRef<NodeJS.Timeout>();
  const active = useRef<boolean>(false);
  const expected = useRef<number | null>(null);
  const savedCallback = useRef<IntervalHookCallback>(callback);

  const tick = useCallback(() => {
    /* istanbul ignore next */
    const expectedTimestamp = expected.current || 0;

    if (selfCorrecting) {
      const delay = Date.now() - expectedTimestamp;
      const ticks = 1 + (delay > 0 ? Math.floor(delay / interval) : 0);
      expected.current = expectedTimestamp + interval * ticks;
      set(Math.max(interval - delay, 1));
      savedCallback.current(ticks);
    } else {
      set(interval);
      savedCallback.current();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  const set = useCallback(
    (ms) => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
      if (active.current) {
        timer.current = setTimeout(tick, ms);
      } else {
        console.debug(
          "Trying to set interval timeout on inactive timer, this is no-op and probably indicates bug in your code."
        );
      }
    },
    [tick, active]
  );

  const start = useCallback(() => {
    const isActive = active.current;
    active.current = true;
    if (expected.current === null) {
      expected.current = Date.now() + interval;
    }
    if (immediate && !isActive) {
      expected.current -= interval;
      tick();
    }

    set(interval);
  }, [tick, interval, immediate, set]);

  const stop = useCallback(
    (triggerFinish = true) => {
      const isActive = active.current;
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
      active.current = false;
      timer.current = undefined;
      expected.current = null;
      if (isActive && triggerFinish) {
        onFinish();
      }
    },
    [onFinish]
  );

  const isActive = useCallback(() => active.current, []);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    autoStart && start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { start, stop, isActive };
}
