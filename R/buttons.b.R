
# This file is a generated template, your changes will not be overwritten

ButtonsClass <- if (requireNamespace('jmvcore', quietly=TRUE)) R6::R6Class(
    "ButtonsClass",
    inherit = ButtonsBase,
    private = list(
        .run = function() {

          makeSampleNow<-self$options$makeSampleBtn
          showSampleOut<-self$options$showSampleBtn
          
          a<-data.frame(x=runif(20),y=runif(20))
          self$results$text$setContent(paste0("x,y = ",format(a$x[1],digits=2),",",format(a$y[1],digits=2)))

          self$results$graphPlot$setState(a)
          
        },
        .plotGraph = function(image,...) {
          a <- image$state
          g<-ggplot()+geom_point(data=a,aes(x=x,y=y))+geom_point(data=a[1,],aes(x=x,y=y),color="red",size=4)
          print(g)
          return(TRUE)
        }
        )
)
