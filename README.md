
# React Image Grid Animator

## Getting Started with React Image Grid Animator

### How to install
##### Install with [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)):
#### `# npm install react-image-grid-animator`
#### `# yarn add react-image-grid-animator`
### Usage
```JSX
import  ImageGrid  from  "react-image-grid-animator";
```
```JSX
<ImageGrid
	images={images}
	visibleCount={10}
	interval={2000}
	animationItemcount={3}
	transitionDuration={200}
	randomized={true}
	isActive={true}
/>
```
### Playground
[react-image-grid-animator playground ](https://prabathmadushan.github.io/react-image-grid-animator-playground/)

### API
| Property           | Type         | Required | Description                  |
|--------------------|--------------|----------|------------------------------|
| images             | string array | Yes      | Array of images for the image grid |
| visibleCount       | number       | yes      | Visible images count in grid |
| interval           | number       | yes      | Animation interval            |
| transitionDuration | number       | yes      | Animation duration           |
| randomized         | boolean      | yes      | Randomixed the animation     |
| isActive           | boolean      | yes      | Animation running or not     |
