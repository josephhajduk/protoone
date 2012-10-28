libraryDependencies <+= sbtVersion(v => "com.github.siasia" %% "xsbt-web-plugin" % (v+"-0.2.11.1"))

resolvers += "sbt-idea-repo" at "http://mpeltonen.github.com/maven/"

//Uncoment this line to enable the sbt idea plugin
addSbtPlugin("com.github.mpeltonen" % "sbt-idea" % "1.1.0")

//Uncoment this line to enable the sbt eclipse plugin
//addSbtPlugin("com.typesafe.sbteclipse" % "sbteclipse-plugin" % "2.1.0")
