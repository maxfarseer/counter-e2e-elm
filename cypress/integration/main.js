context("Counter main", () => {
  // приложение должно открыться по адресу: http://localhost:3000
  it("Should open app on localhost:3000", () => {
    cy.visit("http://localhost:3000");
  });

  // кнопка "+" должна присутствовать на странице
  it("Should render plus button", () => {
    cy.get('[data-cy="plus"]');
  });

  // кнопка "-" должна присутствовать на странице
  it("Should render minus button", () => {
    cy.get('[data-cy="minus"]');
  });

  // результат должен быть равен 0
  it("Should render result equal to 0", () => {
    cy.get('[data-cy="result"]').should("have.text", 0);
  });

  // после клика на "плюс", результат должен быть равен единице
  it("After click on plus, result should be equal 1", () => {
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="result"]').should("have.text", 1);
  });

  // после еще одного клика на "плюс", результат должен быть равен двум
  it("After second click on plus, result should be equal 2", () => {
    cy.get('[data-cy="plus"]').click();
    cy.get('[data-cy="result"]').should("have.text", 2);
  });

  // после клика на "минус", результат должен быть равен единице
  it("After click on minus, result should be equal 1", () => {
    cy.get('[data-cy="minus"]').click();
    cy.get('[data-cy="result"]').should("have.text", 1);
  });

  // эмулируем клик по кнопке "Сбросить"
  it("Reset should be able for click", () => {
    cy.get('[data-cy="reset"]').click();
  });

  // проверяем, что результат равен 0
  it("After click on 'Reset' button, result should be equal 0", () => {
    cy.get('[data-cy="result"]').should("have.text", 0);
  });
});
