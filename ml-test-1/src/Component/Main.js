import React, { Component } from 'react';
// Importing ml5.js as ml5
import * as ml5 from "ml5";

class Main extends Component {
  

  classifyImg = () => {
    // Initialize the Image Classifier method with MobileNet
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    // When the model is loaded
    function modelLoaded() {
      console.log('Model Loaded!');
    }
    // Put the image to classify inside a variable
    const image = document.getElementById('image');
    // Make a prediction with a selected image
    classifier.predict(image, 5, function(err, results) {
      // print the result in the console
      console.log(results);
    })
  }

  componentDidMount(){
    // once the component has mount, start the classification
    this.classifyImg();
  }
  componentWillUpdate() {
      this.classifyImg();
  }
  render(){
      console.log("Data Updated");
    //   this.classifyImg()
      
  return (
<div>
<div className="App">
    
        <h1>Image classification with ML5.js</h1>
	 <img src={this.props.img} id="image" width="400" alt="" crossOrigin="anonymous" />
      </div>
</div>
  );
}}

export default Main;
