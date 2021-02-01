# React Image Grid Animator

## Getting Started with React Image Grid Animator

### How to install

##### Install with [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)):

```sh
$ npm install react-image-grid-animator
```

```sh
$ yarn add react-image-grid-animator
```

### Usage

```JSX
import  ImageGrid  from  "react-image-grid-animator";
```

```JSX
<ImageGrid
	images={images}
	visibleCount={10}
	interval={2000}
	animationItemcount={0}
	transitionType={"SCALE"}
	transitionDuration={200}
	isActive={true}
/>
```

### Playground

[react-image-grid-animator playground ](https://prabathmadushan.github.io/react-image-grid-animator-playground/)

### API

| Property           | Type                                         | Required | Description                                                                            |
| ------------------ | -------------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| images             | string array                                 | yes      | Array of image for the image grid                                                      |
| visibleCount       | number                                       | yes      | Visible image count in grid                                                            |
| interval           | number                                       | yes      | Animation interval in milliseconds                                                     |
| animationItemCount | number                                       | yes      | Animation item count (If animation item count value is "0" then it will be randomized) |
| transitionType     | "SCALE" , "FADE" , "FADE_AND_SCALE" , "NONE" | no       | Animation type (default value is "FADE_AND_SCALE")                                     |
| transitionDuration | number                                       | yes      | Animation duration in milliseconds                                                     |
| isActive           | boolean                                      | no       | Animation running or not (default value is true)                                       |
| imageClass         | string                                       | no       | CSS class for image                                                                    |
