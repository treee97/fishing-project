interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  return (
    <div className="absolute text-light-text text-opacity-30 text-9xl font-normal tracking-tighter-custom select-none -z-10 dark:text-dark-text dark:text-opacity-30">
      {text}
    </div>
  );
};

export default Title;
