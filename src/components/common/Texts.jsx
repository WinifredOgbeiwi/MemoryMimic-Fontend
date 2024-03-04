export const Heading = ({ text, span }) => (
    <h1 style={{ fontSize: "3.5rem" }}> {text} <span style={{ color: "#651FFF" }}>{span}</span></h1>
)

export const HeadingParagraphs = ({ text }) => (
    <p style={{ fontSize: "1.25rem" }}> {text} </p>
)

export const SubSubHeadings = ({ text, color }) => (
    <h2 style={{ fontSize: "2.25rem", color: `${color}` }} > {text} </h2>
)
export const SubHeadingParagraphs = ({ text }) => (
    <p style={{ fontSize: "1.125rem" }}> {text} </p>
)
