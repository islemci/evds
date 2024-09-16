const axios = require('axios');

class evdsAPI {
  constructor(key) {
    if (!key) {
      throw new Error('Bir API anahtarı sunmalısınız.');
    }
    this.key = key;
    this.baseUrl = 'https://evds2.tcmb.gov.tr/service/evds/';
  }

  // Seri kodu ile veri serilerini al
  async fetchSeries(seriesCode, startDate, endDate, type = 'json', frequency = '1') {
    try {
      const url = `${this.baseUrl}series=${seriesCode}&startDate=${startDate}&endDate=${endDate}&type=${type}&frequency=${frequency}`;
      const response = await axios.get(url, {
        headers: { 'key': this.key },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Veri serilerini alırken bir hata oluştu: ${error.message}`);
    }
  }

  // Kategorileri al
  async fetchCategories(type = 'json') {
    try {
      const url = `${this.baseUrl}categories/type=${type}`;
      const response = await axios.get(url, {
        headers: { 'key': this.key },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Kategorileri alırken bir hata oluştu: ${error.message}`);
    }
  }

  // Kodu ile veri serilerini al
  async fetchDataGroups(mode, code, type = 'json') {
    try {
      const url = `${this.baseUrl}datagroups/mode=${mode}&code=${code}&type=${type}`;
      const response = await axios.get(url, {
        headers: { 'key': this.key },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Veri serilerini alırken bir hata oluştu: ${error.message}`);
    }
  }
}

module.exports = evdsAPI;