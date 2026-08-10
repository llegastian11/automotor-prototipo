window.vehicleCatalogService = Object.freeze({
  async getBrands() {
    return Object.keys(window.PLAQUEALO_DATA.vehicleCatalog);
  },
  async getModels(brand) {
    return window.PLAQUEALO_DATA.vehicleCatalog[brand] || [];
  }
});

window.authService = Object.freeze({
  getState() {
    return {status: window.PLAQUEALO_CONFIG.auth.enabled ? 'unauthenticated' : 'demo'};
  },
  async signInWithGoogle() {
    if (!window.PLAQUEALO_CONFIG.auth.enabled) {
      throw new Error('AUTH_NOT_CONFIGURED');
    }
  }
});

