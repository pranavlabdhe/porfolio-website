import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Web Developer 
            </h3>

            <p className="text-muted-foreground">
            With a strong foundation in frontend development and a growing expertise in JavaScript full stack technologies (MERN/MEAN), I craft responsive, user-friendly web applications that are both functional and visually engaging. 
            </p>

            <p className="text-muted-foreground">
            As I continue to expand my skillset, I am committed to staying ahead of industry trends and embracing new challenges in the world of full stack development and digital marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a // Open in new tab
                href="https://drive.google.com/uc?export=download&id=1B_W6UU50bnToEBUE1Hs2hdwXMy7iMm42"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                  Expert in <b className="highlight_skills"> Frontend Development</b>, proficient in <b className="highlight_skills">Javascript Full Stack Technologies</b>, and capable of creating responsive <b className="highlight_skills">WordPress websites</b>.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                  Focused on crafting responsive interfaces using basic <b className="highlight_skills">UI/UX principles</b> and <b className="highlight_skills">Material Design</b> practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Digital Marketing</h4>
                  <p className="text-muted-foreground">
                  Skilled in <b className="highlight_skills">SEO</b> and other <b className="highlight_skills">Digital Marketing Strategies</b> to improve search rankings, drive organic traffic, and increase conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
