import {
  createContext,
  useContext,
  type DetailedHTMLProps,
  type FormHTMLAttributes,
  type HTMLAttributes,
} from "react";

import { Heading } from "./Heading";

type Props =
  | (Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      "role"
    > & {
      landmarkRole:
        | "banner"
        | "complementary"
        | "contentinfo"
        | "main"
        | "navigation"
        | "region";
    })
  | (Omit<
      DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
      "role"
    > & {
      landmarkRole: "form";
    })
  | (Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      "role"
    > & {
      landmarkRole: "search";
    });

const LevelContext = createContext(0);

export const useLandmark = () => {
  const level = useContext(LevelContext);

  return {
    level,
  };
};

export const Landmark = (props: Props) => {
  const { level } = useLandmark();

  switch (props.landmarkRole) {
    case "banner": {
      const { children, landmarkRole, ...rest } = props;

      return (
        <header {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </header>
      );
    }

    case "complementary": {
      const { children, landmarkRole, ...rest } = props;

      return (
        <aside {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </aside>
      );
    }

    case "contentinfo": {
      const { children, landmarkRole, ...rest } = props;

      return (
        <footer {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </footer>
      );
    }

    case "form": {
      const { children, landmarkRole, ...rest } = props;

      return (
        <form {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </form>
      );
    }

    case "main": {
      const { children, landmarkRole, ...rest } = props;

      return (
        <main {...rest}>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </main>
      );
    }

    case "navigation": {
      const { children, landmarkRole, ...rest } = props;

      return (
        <nav {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </nav>
      );
    }

    case "region": {
      const { children, landmarkRole, ...rest } = props;

      return (
        <section {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </section>
      );
    }

    case "search": {
      const { children, landmarkRole, ...rest } = props;

      return (
        <div role="search" {...rest}>
          <LevelContext.Provider value={(level === 0 ? level + 1 : level) + 1}>
            {children}
          </LevelContext.Provider>
        </div>
      );
    }
  }
};

Landmark.Heading = Heading;
