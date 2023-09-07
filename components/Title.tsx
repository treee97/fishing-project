interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  return (
    // added md and sm to the text size but not working as expected
    <div className="absolute left-0 text-light-text dark:text-dark-text dark:text-opacity-30 text-opacity-30 text-8xl font-normal tracking-tighter-custom select-none -z-10 -rotate-90 flex items-center">
      {text}
    </div>
  );
};
// absolute text-light-text text-opacity-30 text-9xl font-normal tracking-tighter-custom select-none -z-10 dark:text-dark-text dark:text-opacity-30

export default Title;
