import { render, screen } from "@testing-library/react"
import Todo from "./todo.js"

test("should render todo component", () => {
	render(<Todo />)
	const todoElement = screen.getByTestId("todo-1")
	expect(todoElement).toBeInTheDocument()
	expect(todoElement).toHaveTextContent("Hello World")
})
