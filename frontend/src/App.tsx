import "./App.css";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-5 text-3xl font-bold">Todo List</h1>
        <form className="flex w-full max-w-2xl">
          <div className="flex-grow items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="What's on your mind?"
              aria-label="Full name"
            />
          </div>
          <button
            className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
