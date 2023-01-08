import Image from "next/image";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <img
        src="https://icon-library.com/images/twitter-icon-svg/twitter-icon-svg-28.jpg"
        width={150}
        height={150}
        className="object-contain"
      />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
