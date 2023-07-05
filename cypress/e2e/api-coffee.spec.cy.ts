context("GET /coffee", () => {
    it("gets a coffee", () => {
      cy.request("GET", "https://random-data-api.com/api/coffee/random_coffee").then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.results)
      })
    })
  })