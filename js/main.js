
const state = {
    records: [],
    query: "",
    category: "all",
    status: "all",
    sort: "date-desc",
    loading: true,
    error: null
  };
  
  
  async function loadRecords() {
    try {
      const res = await fetch("./data/records.json");
      if (!res.ok) throw new Error(`Máy chủ trả về ${res.status}`);
      state.records = await res.json();
    } catch (err) {
      state.error = `Không tải được dữ liệu: ${err.message}`;
    } finally {
      state.loading = false;
      render();
    }
  }
  
  function render() {
    
  }
  
  
  loadRecords();
  const state = {
    records: [],
    query: "",
    category: "all",
    status: "all",
    sort: "date-desc",
    loading: true,
    error: null
  };
  
  
  async function loadRecords() {
    try {
      const res = await fetch("./data/records.json");
      if (!res.ok) throw new Error(`Máy chủ trả về ${res.status}`);
      state.records = await res.json();
    } catch (err) {
      state.error = `Không tải được dữ liệu: ${err.message}`;
    } finally {
      state.loading = false;
      render();
    }
  }
  
  function render() {
   
  }
  
 
  loadRecords();