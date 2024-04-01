function viewPDF($name) {
	document.getElementById('pdf-container').style.display = 'block';
	document.getElementById('pdf-viewer').src = $name;
	document.getElementById('pre-pdf').style.display = 'none';
	
}	

document.addEventListener("DOMContentLoaded", function() {
  // Get the ul element
  var ul = document.getElementById("list");
  var topic_ul = document.getElementById("topic_list");
  // Add click event listener to the ul
  ul.addEventListener("click", function(e) {
    // Check if the clicked element is a button
    if (e.target.tagName === "BUTTON") {
      // Remove any previously selected items
      var selectedItems = document.querySelectorAll(".selected");
      selectedItems.forEach(function(item) {
        item.classList.remove("selected");
      });
      
      // Add selected class to the parent li of the clicked button
      e.target.parentNode.classList.add("selected");
    }
  });
	topic_ul.addEventListener("click", function(e) {
    // Check if the clicked element is a button
    if (e.target.tagName === "A") {
      // Remove any previously selected items
      var selectedItems = document.querySelectorAll(".selected2");
      selectedItems.forEach(function(item) {
        item.classList.remove("selected2");
      });
      
      // Add selected class to the parent li of the clicked button
      e.target.classList.add("selected2");
    }
  });
});

function show_data(title) {
	// Selecting the first element with a specific ID
	document.querySelector('#left-div-head').innerHTML = title;
	var left_div = document.querySelector('.left-div ul');
	switch(title) {
		case "MGKVP":
			left_div.innerHTML = '';
			left_div.innerHTML = 
			'<li><button onclick="viewPDF(\'bca.pdf\')">BCA Syllabus</button></li>'+
			'<li><button onclick="viewPDF(\'B..B.A._Major_Syllabus_for_U.G.(Session_2021-22)_180.pdf\')">BBA Syllabus</button></li>'+
			'<li><button onclick="viewPDF(\'LLB mgkvp.pdf\')">LLB Syllabus</button></li>'+
			'<li><button onclick="viewPDF(\'B.A. LLB.pdf\')">BA LLB Integrated</button></li>'+
			'<li><button onclick="viewPDF(\'bca4.pdf\')">BCA 4th SEM PYQ</button></li>';
			break;
		case "INDIA":
			left_div.innerHTML = '';
			left_div.innerHTML = 
			'<li><button onclick="viewPDF(\'Constitution of India - In English.pdf\')">Constitution of India (English)</button></li>'+
			'<li><button onclick="viewPDF(\'Constitution of India - In Hindi.pdf\')">Constitution of India (Hindi)</button></li>'+
			'<li><button onclick="viewPDF(\'IPC-2023.pdf\')">Indian Penal Code (IPC)</button></li>'+
			'<li><button onclick="viewPDF(\'ActsInChronological.pdf\')">Acts in Choronological Order</button></li>'+
			'<li><button onclick="viewPDF(\'Companies_Act_1956_13jun2011.pdf\')">Companies Act-1956</button></li>'+
			'<li><button onclick="viewPDF(\'CompaniesAct2013.pdf\')">Companies Act-2013</button></li>'+
			'<li><button onclick="viewPDF(\'Uttar-Pradesh-District-Map-PDF.pdf\')">Uttar Pradesh Map</button></li>'+
			'<li><button onclick="viewPDF(\'AllIndiaPinCode.pdf\')">All India Pin Code</button></li>';
			break;
		case "AKTU":
			left_div.innerHTML = '';
			left_div.innerHTML = 
			'<li><button onclick="viewPDF(\'b_tech_aktu_syllabus.pdf\')">B.Tech Syllabus</button></li>'+
			'<li><button onclick="viewPDF(\'Bachelor of Pharmacy I, II, III & IV Year syllabus 2019-2020 23 March 2021.pdf\')">B.Pharma Syllabus</button></li>'+
			'<li><button onclick="viewPDF(\'mca_aktu.pdf\')">MCA Syllabus</button></li>';
			break;
		case "GK":
			left_div.innerHTML = '';
			left_div.innerHTML = 
			'<li><button onclick="viewPDF(\'R Guptas Popular Master Guide For CUET-UG General Test 2022.pdf\')">General Test</button></li>'+
			'<li><button onclick="viewPDF(\'R Guptas Popular Master Guide For CUET-UG English Language 2022.pdf\')">English Language</button></li>';
			break;
		case "BHU":
			left_div.innerHTML = '';
			left_div.innerHTML = 
			'<li><button onclick="viewPDF(\'BHU_bsc_Syllabus_220200403031403.pdf\')">BSc Syllabus</button></li>'+
			'<li><button onclick="viewPDF(\'Computer_science_bhu_Syllabus_3206520221116024357.pdf\')">Compter Science</button></li>';
			break;
		case "Others":
			left_div.innerHTML = '';
			left_div.innerHTML = '';
			break;
		case "BOOKS":
			left_div.innerHTML = '';
			left_div.innerHTML = 
			'<li><button onclick="viewPDF(\'Accounting and Financial Management for BCA & MCA ( PDFDrive ).pdf\')">Accounting and Financial Management</button></li>'+
			'<li><button onclick="viewPDF(\'AI_Russell_Norvig.pdf\')">Artificial Intellingence</button></li>'+
			'<li><button onclick="viewPDF(\'Big Data Principles and Paradigms.pdf\')">Big Data Principles and Paradigms</button></li>'+
			'<li><button onclick="viewPDF(\'BlockchainTechnologyApplications.pdf\')">Blockchain Technology Applications</button></li>'+
			'<li><button onclick="viewPDF(\'Business Economics (FndProg).pdf\')">Business Economics</button></li>'+
			'<li><button onclick="viewPDF(\'cloudcomputingbasics_aselfteachingintroduction.pdf\')">Cloud Computing Basic</button></li>'+
			'<li><button onclick="viewPDF(\'CLOUD COMPUTING Principles and Paradigms.pdf\')">Cloud Computing Principles and Paradigms</button></li>'+
			'<li><button onclick="viewPDF(\'Computer Architecture - PDF Room.pdf\')">Computer Architecture</button></li>'+
			'<li><button onclick="viewPDF(\'computer graphics and multimedia application.pdf\')">Computer Graphics and Multimedia Application</button></li>'+
			'<li><button onclick="viewPDF(\'Computer Organization and ArchitectureWilliam-Stallings-Designing-for-Performance-8th-Edition-Prentice-Hall-2011.pdf\')">Computer Organization and Architecture</button></li>'+
			'<li><button onclick="viewPDF(\'Computer_Network_And_Network_Security.pdf\')">Computer Network And Network Security</button></li>'+
			'<li><button onclick="viewPDF(\'cryptography-and-network-security_-principles-and-practice-7th-global-edition.pdf\')">Cryptography and Network Security</button></li>'+
			'<li><button onclick="viewPDF(\'cyber_security.pdf\')">Cyber Security</button></li>'+
			'<li><button onclick="viewPDF(\'DATABASE MANAGEMENT SYSTEMS.pdf\')">Database Management System</button></li>'+
			'<li><button onclick="viewPDF(\'e_commerce.pdf\')">E-Commerce</button></li>'+
			'<li><button onclick="viewPDF(\'graph theory and combinators.pdf\')">Graph Theory and Combinators</button></li>'+
			'<li><button onclick="viewPDF(\'Internet of things -IoT by Raj Kamal Text Book.pdf\')">Internet of Things</button></li>'+
			'<li><button onclick="viewPDF(\'javanotes5.pdf\')">Java Programming</button></li>'+
			'<li><button onclick="viewPDF(\'js-linkedin.pdf\')">Javascript</button></li>'+
			'<li><button onclick="viewPDF(\'knowledge-management-kimiz-dalkir.pdf\')">Knowledge Management</button></li>'+
			'<li><button onclick="viewPDF(\'Learning_Python.pdf\')">Learning Python</button></li>'+
			'<li><button onclick="viewPDF(\'let-us-c-authentic-guide-to-c-programming-language-19nbsped-9355512767-9789355512765.pdf\')">Let Us C</button></li>'+
			'<li><button onclick="viewPDF(\'Mathematics for Computer Science (2011 May book).pdf\')">Mathematics</button></li>'+
			'<li><button onclick="viewPDF(\'micropreocessor_intel_book.pdf\')">Microprocessor</button></li>'+
			'<li><button onclick="viewPDF(\'NumericalMethods.pdf\')">Numerical Methods</button></li>'+
			'<li><button onclick="viewPDF(\'Operating_System_Concepts_8th_EditionA4.pdf\')">Operating System</button></li>'+
			'<li><button onclick="viewPDF(\'Operations-Research-.pdf\')">Operations Research</button></li>'+
			'<li><button onclick="viewPDF(\'Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf\')">Software Engineering</button></li>'+
			'<li><button onclick="viewPDF(\'Systemanalysisanddesign.pdf\')">System Analysis and Design</button></li>'+
			'<li><button onclick="viewPDF(\'theory_of_computation_reference_e-book.pdf\')">Theory of Automata & Formal Languages</button></li>'+
			'<li><button onclick="viewPDF(\'Web Technologies - A Computer Science Perspective.pdf\')">Web Technologies</button></li>'+
			'<li><button onclick="viewPDF(\'books/a.pdf\')">Book1</button></li>';
			break;
		default:
			// Code block to be executed if expression doesn't match any case
	}

}
	
