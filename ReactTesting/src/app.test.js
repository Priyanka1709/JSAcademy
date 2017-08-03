import App from "./app";

it("Sum should return sum", () => {
	var app= new App();
	var sum= app.sum(1,2);
	expect(sum).toBe(3);
})