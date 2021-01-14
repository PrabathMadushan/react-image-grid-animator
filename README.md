
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
	animationItemcount={0}
	transitionDuration={200}
	isActive={true}
/>
```
### Playground
[react-image-grid-animator playground ](https://prabathmadushan.github.io/react-image-grid-animator-playground/)

### API
| Property           | Type         | Required | Description                                                                                    |
|--------------------|--------------|----------|------------------------------------------------------------------------------------------------|
| images             | string array | yes      | Array of images for the image grid                                                             |
| visibleCount       | number       | yes      | Visible image count in grid  |
| interval           | number       | yes      | Animation interval in milliseconds                                                                       |
| animationItemcount           | number       | yes      | Animation item count (If animation item count value is "0" then it will be randomized.)                                                                      |
| transitionDuration | number       | yes      | Animation duration in milliseconds                                                                       |
| isActive           | boolean      | no       | Animation running or not (default value is true)                                                        |


 