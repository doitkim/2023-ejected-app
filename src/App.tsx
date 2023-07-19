import DisplayText from "./components/DisplayText";

function App() {
  const getUserFullname = async (username: string): Promise<string> => {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      const userByName = users.find((user: any) => {
        return user.username.toLowerCase() === username;
      });
      return userByName.name;
    }
    return "";
  };

  return (
    <div className="App">
      <DisplayText getUserFullname={getUserFullname} />
    </div>
  );
}

export default App;
