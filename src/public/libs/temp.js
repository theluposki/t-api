const response = await fetch("/api/v1/auth", {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  referrerPolicy: "origin",
  body: JSON.stringify(data),
})

const result = await response.json();
console.log(result)


const myProfile = async () => {
  const response = await fetch("/api/v1/users/myprofile", { method: "GET" })

  const result = await response.json();
  if(result.id) {
    myprofile.innerHTML = JSON.stringify(result, null, 2)
  }
  if(result.message) {
    myprofile.innerHTML = JSON.stringify(result, null, 2)
  }

}

btnSign.addEventListener("click", sign)
btnMyProfile.addEventListener("click", myProfile)
