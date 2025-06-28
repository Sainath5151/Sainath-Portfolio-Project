import PDFViewer from "@/components/pdf-viewer";
import ProjectCard from "@/components/project-card";

export default function Portfolio() {
  const projects = [
    {
      title: "Web Application Dashboard",
      description: "Modern responsive dashboard with real-time analytics and user management.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile app with seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Data Analytics Platform",
      description: "Advanced analytics platform with machine learning insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-scorpion-darker">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">My Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my professional journey, skills, and achievements
            </p>
          </div>
          
          {/* Resume PDF Viewer Section */}
          <div className="mb-16">
            <PDFViewer />
          </div>
          
          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
