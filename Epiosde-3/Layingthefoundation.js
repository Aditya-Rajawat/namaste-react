import React from 'react'
import ReactDOM from 'react-dom/client'

// Creating React Element using core React

const parent = React.createElement("h1", {id : "heading"}, "Namaste-React")

// Creating React Element using JSX

const jsxheading = <h1>Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)

// React functional component

const HeadingComponent = () => {
    return <h1>Heading Component</h1>
}   

root.render(jsxheading)
root.render(<HeadingComponent />)
