interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  // FALTA AGREGAR EL LIGHT THEME Y NIGHT THEME
  return (
    <div className="absolute text-cyan-950 text-opacity-50 text-9xl font-normal tracking-tighter">
      {text}
    </div>
  );
};

export default Title;
