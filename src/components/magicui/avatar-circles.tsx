
import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
  className?: string;

  avatarUrls: string[];
}

const AvatarCircles = ({

  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-10 w-10 rounded-full border p-1 border-input bg-secondary dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}

    </div>
  );
};

export default AvatarCircles;
