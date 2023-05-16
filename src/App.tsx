import './App.css';
import { CircleAvatar } from './components/circle_avatar';

function App() {
  return (
    <div className="App">
      <CircleAvatar
        url={'https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg'}
        size={56}
        onClick={function(): void{
          throw new Error("Function not implemented!");
        }}
      />
    </div>
  );
}

export default App;
