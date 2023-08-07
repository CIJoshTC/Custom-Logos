const filesystem= require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shapes");

class Svg{
    constructor () {
        this.textElement = ''
        this.shapeElement = ''

    }

    render(){
        return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300"'
    }

    setTextElement(text,color){
        this.textElement = '<text x="150" y="125" font-size="60" text-anchor="middle"'
    }

    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        
    }


]
