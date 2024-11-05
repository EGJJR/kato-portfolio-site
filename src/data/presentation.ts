type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  bio: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "Email me",
  title: "Hi, I’m Kato",
  //profile: "/profile.jpeg",
  description:
    "An intensely ambitious student with a vision of entering the private equity and holding company space. I have a strong bias for action, prioritize first-principles thinking, simplified answers when analyzing complex problems, focus on asking the right questions, and get things done. Additionally, I read extensively: biographies, history, annual letters, psychology, and finance blogs.",
  bio: 
    "",
    socials: [
    {
      label: "X",
      link: "https://x.com/kgmutebi",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/katogoloobamutebi/",
    },
    // {
    //   label: "Github",
    //   link: "https://github.com/MaeWolff",
    // },
  ],
};

export default presentation;
