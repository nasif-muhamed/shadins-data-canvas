import { Card } from "@/components/ui/card";
import { Code2, Database, BarChart3, Brain, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: Code2,
      skills: ["Python (Pandas, NumPy)", "SQL (PostgreSQL, MySQL)", "Excel (Advanced)", "Git", "Scikit-learn", "XGBoost"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Interactive Dashboards"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Statistical Analysis",
      icon: Database,
      skills: ["Hypothesis Testing", "Regression Analysis", "Classification", "Predictive Modeling", "Feature Engineering"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Data Preprocessing"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Data Storytelling", "Communication", "Teamwork", "Critical Thinking", "Attention to Detail", "Adaptability"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Intelligence",
      icon: Lightbulb,
      skills: ["KPI Development", "Business Strategy", "Data-Driven Decision Making", "Stakeholder Management"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card border-primary/20 p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-muted/50 rounded-full text-sm text-foreground border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
