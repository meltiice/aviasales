export default class Service {
   url = 'https://aviasales-test-api.kata.academy';

   async getId() {
      const result = await fetch(`${this.url}/search`);
      const searchJson = await result.json();
      return searchJson.searchId;
   }

   async getInfo(id) {
      const response = await fetch(`${this.url}/tickets?searchId=${id}`);
      if (!response.ok) {
         return { tickets: [], stop: false };
      }
      const data = await response.json();
      return data;
   }
}
