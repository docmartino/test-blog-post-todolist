import React, { useState, useEffect } from "react";
import Form from "./Form";
// import List from "./List";
import Table from "./Table";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        // console.log(data);
        setItems(data);
      } catch (err) {
        console.error(err.message);
      } finally {
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <main>
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </main>
  );
};

export default App;

// -------- ANCieN Code --------

/*
const App = () => {

  const API_URL = "https://jsonplaceholder.typicode.com";

  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const fetchContent = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error("Plz reload App");
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    // console.log(API_URL + "/" + e);
    fetchContent(`${API_URL}/${e}`);
  };

  return (
    <main>
      <button value="users" onClick={(e) => handleSubmit(e.target.value)}>
        {" "}
        Users{" "}
      </button>
      <button value="posts" onClick={(e) => handleSubmit(e.target.value)}>
        {" "}
        Posts{" "}
      </button>
      <button value="comments" onClick={(e) => handleSubmit(e.target.value)}>
        {" "}
        Comments{" "}
      </button>
      <div>
        <ul>{data.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
      </div>
    </main>
  );
};

export default App;
*/
