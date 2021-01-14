
# React Image Grid Animator

## Getting Started with React Image Grid Animator

### How to install
##### Install with [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)):

##### `# npm install react-image-grid-animator`
##### `# yarn add react-image-grid-animator`

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
| Property           | Type         | Required | Description                                                                                    |
|--------------------|--------------|----------|------------------------------------------------------------------------------------------------|
| images             | string array | yes      | Array of images for the image grid                                                             |
| visibleCount       | number       | yes      | Visible image count in grid (If animation item count value is "0" then it will be randomized.) |
| interval           | number       | yes      | Animation interval in milliseconds                                                                       |
| transitionDuration | number       | yes      | Animation duration in milliseconds                                                                       |
| isActive           | boolean      | no       | Animation running or not (default value is true)                                                        |


 