import { shallow } from "enzyme";
import mockData from "../../mockData";
import TodoList from "./TodoList";

describe("todo list test", () => {
    it("should show title of todos", () => {
        const todo = shallow(<TodoList todos={mockData} />);
        // render(<TodoList todos={mockData} />);
        mockData.forEach((d) => expect(todo.text().includes(d.title)).toBe(true));
        // mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
    });
});
