export const fetchAndStoreUser = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/auth/user", {
      withCredentials: true,
    });

    if (res.data && res.data._id) {
      console.log("✅ Saving user to localStorage:", res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } else {
      localStorage.removeItem("user");
      return null;
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    localStorage.removeItem("user");
    return null;
  }
};
