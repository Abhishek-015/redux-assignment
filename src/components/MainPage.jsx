import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showData } from "../redux/action";

const Searched = () => {
  const { showAllData } = useSelector((store) => store.allData);
  console.log(showAllData);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios.get("http://localhost:3001/data").then(({ data }) => {
      console.log("data", data);
      dispatch(showData(data));
    });
  };

  return (
    <div class="container">
      <h2>Data</h2>
      <table class="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Explicit</th>
            <th>Description</th>
            <th>Creation Date</th>
            <th>Quality</th>
          </tr>
        </thead>
        <tbody>
          {showAllData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  className="card-img-top"
                  src={user.avatar}
                  height="500px"
                  alt="Card image cap"
                />
              </td>
              <td>{user.title}</td>
              <td>{user.author}</td>
              <td>{user.explicit ? "Yes" : "NO"}</td>
              <td>{user.description}</td>
              <td>{user.creation_date}</td>
              <td>{user.quality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Searched;
