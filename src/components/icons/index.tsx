import { Settings, ShieldQuestion } from 'lucide-react';

const Icon = ({ name, ...props }: { name: string; [key: string]: unknown }) => {
  switch (name) {
    case 'settings':
      return <Settings {...props} />;

    default:
      return <ShieldQuestion />;
  }
};

export default Icon;
