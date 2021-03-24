import { cleanup, render, screen } from "@testing-library/react"
import Todo from "./todo.js"

afterEach(() => {
	cleanup()
})

test("should render non-completed todo", () => {
	const todo = { id: 1, title: "wash dishes", completed: false }
	render(<Todo todo={todo} />)
	const todoElement = screen.getByTestId("todo-1")
	expect(todoElement).toBeInTheDocument()
	expect(todoElement).toHaveTextContent("wash dishes")
	expect(todoElement).not.toContainHTML("<strike>")
})

test("should render completed todo", () => {
	const todo = { id: 2, title: "grocery shop", completed: true }
	render(<Todo todo={todo} />)
	const todoElement = screen.getByTestId("todo-2")
	expect(todoElement).toBeInTheDocument()
	expect(todoElement).toHaveTextContent("grocery shop")
	expect(todoElement).toContainHTML("<strike>")
})
