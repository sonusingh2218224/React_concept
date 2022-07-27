import React, {useState} from 'react'
import swal from "sweetalert2";
import axios from "axios"


const HandleDelete = id => {
const [refresh, setRefresh] =useState();

    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete!",
      })
      .then(result => {
        if (result.isConfirmed) {
          
           axios
            .delete(`/${id}`)
            .then(res => {
              if (res.status === 200) {
                setRefresh(!refresh);
              }
            })
            .catch(err => {
              swal.fire("Oops", "Something went wrong", "error");
            });
        }
      });
  
  return (
    <div>HandleDelete</div>
  )
  }

export default HandleDelete