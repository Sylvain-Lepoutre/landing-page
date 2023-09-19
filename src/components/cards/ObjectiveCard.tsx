import { Landmark } from "../ui/Landmark/Landmark";

type Props = {
  content: string;
  heading: string;
  imageUrl: string;
};

export const ObjectiveCard = ({ content, heading, imageUrl }: Props) => {
  return (
    <div className="my-12 flex flex-col gap-8 text-left md:w-1/3">
      <img alt="" className="hidden md:block md:h-28 md:w-28" src={imageUrl} />

      <Landmark.Heading className="my-4 text-xl font-bold">
        {heading}
      </Landmark.Heading>

      <p className="text-xl">{content}</p>
    </div>
  );
};
