import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const addButton = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    expect(todo).not.toHaveClass("completed");
    fireEvent.click(todo);
    expect(todo).toHaveClass("completed");
    fireEvent.click(todo);
    expect(todo).not.toHaveClass("completed");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build Todo App");
    const deleteButton = screen.getByTestId("delete-Build Todo App");
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
