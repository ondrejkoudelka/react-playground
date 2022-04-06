import React, { Component } from 'react'
import './SortingVizualizer.css'
import * as sortingAlgorithms from './SortingFunctions'

export default class SortingVizualizer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            array: [],
            backgroundColor: '#282c34',
        }
    }

    componentDidMount() {
        this.resetArray()
    }

    bubbleSort() {
        const jsSortedArray = this.state.array.slice().sort((a, b) => a - b)
        const result = sortingAlgorithms.bubbleSort(this.state.array)

        const animations = result.animations

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar')
            let barOne = arrayBars[animations[i].indexOne]
            let barTwo = arrayBars[animations[i].indexTwo]
            if (!animations[i].finalMove) {
                setTimeout(() => {
                    barOne.style.height = `${this.getBarHeight(
                        animations[i].heightTwo
                    )}px`
                    barTwo.style.height = `${this.getBarHeight(
                        animations[i].heightOne
                    )}px`
                }, i)
            }
        }
    }

    getBarHeight(value) {
        return (value / 100) * window.innerHeight * 0.8
    }

    resetArray() {
        const array = []
        for (let i = 0; i < 200; i++) {
            array.push(Math.floor(Math.random() * 100))
        }

        this.setState({
            array: array,
            backgroundColor: '#282c34',
        })
    }

    render() {
        const { array } = this.state
        return (
            <div className="sorter-container">
                <div className="array-container">
                    {array.map((value, index) => (
                        <div
                            className="array-bar"
                            l
                            key={index}
                            style={{
                                height: `${this.getBarHeight(value)}px`,
                                backgroundColor: `${this.state.backgroundColor}`,
                            }}
                        ></div>
                    ))}
                </div>
                <div className="buttons-container">
                    <button onClick={() => this.resetArray()}>
                        Generate array
                    </button>
                    <button onClick={() => this.bubbleSort()}>
                        Sort array
                    </button>
                </div>
            </div>
        )
    }
}
