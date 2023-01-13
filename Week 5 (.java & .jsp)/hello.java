package cs3220servelet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class hello extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public hello() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		response.setContentType("text/html");

//		response.getWriter().append("Served at: ").append(request.getContextPath());
//		PrintWriter out = response.getWriter();
//		out.println("<html><head><title>Hello</title></head><body>");
//		out.println("<h2>Hello World</h2>");
//		out.println("</body></html>");
		response.getWriter().println("Hello World");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
	
	//ANNOTATIONS 

}
