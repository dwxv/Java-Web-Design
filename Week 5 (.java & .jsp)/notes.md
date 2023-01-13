- no main method (Ran by application server, not a user)

- request goes in, response comes out (html page)

- INVALID Patterns:                                                       Conflicting pattern             Overlapping

  - /member/*.html      or 	member/index.html 	or 	2x /HelloServlet 	or 	*.html and /member/*

- Directory Structure of Java Web App

  - Application Root Directory (WWW or WebContent (static resources))
    - ​									JSPs and static resources (HTML and CSS)
    - WEB-INF
      - ​                              web.xml
      - classes (build -> classes)
        - ​                      Compiled Java classes
      - lib
        - ​                      additional Java libraries

- Web.xml

  - time stamp and touch command

- Application scope

  - getServletContext()

- 

  - ​			NOTES below

  ~~~java
  package cs3220servelet;
  
  import java.io.IOException;
  import javax.servlet.ServletException;
  import javax.servlet.annotation.WebServlet;
  import javax.servlet.http.HttpServlet;
  import javax.servlet.http.HttpServletRequest;
  import javax.servlet.http.HttpServletResponse;
  
  /**
   * Servlet implementation class hello
   */
  @WebServlet("/hello")
  public class hello extends HttpServlet {
  	private static final long serialVersionUID = 1L;
         
      /**
       * @see HttpServlet#HttpServlet()
       */
      public hello() {
          super();
          // TODO Auto-generated constructor stub
      }
  
  	/**
  	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
  	 */
  	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
  			throws ServletException, IOException {
  		// TODO Auto-generated method stub
  		response.getWriter().append("Served at: ").append(request.getContextPath());
  		response.getWriter().print("\nHello World");
  	}
  
  	/**
  	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
  	 */
  	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  		// TODO Auto-generated method stub
  		doGet(request, response);
  	}
  
  }
  
  ~~~

  