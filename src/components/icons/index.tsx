import { Settings, Sun, Moon, ShieldQuestion, Languages } from 'lucide-react';

const Icon = ({ name, ...props }: { name: string; [key: string]: unknown }) => {
  switch (name) {
    case 'settings':
      return <Settings {...props} />;

    case 'sun':
      return <Sun {...props} />;

    case 'moon':
      return <Moon {...props} />;

    case 'languages':
      return <Languages {...props} />;

    default:
      return <ShieldQuestion />;
  }
};

export default Icon;
