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
		myFunction();
	// Selecting the first element with a specific ID
	document.querySelector('#left-div-head').innerHTML = title;
	var left_div = document.querySelector('.left-div ul');
switch(title) {
    case "MGKVP":
        left_div.innerHTML = '';
        left_div.innerHTML = 
        '<li><button onclick="viewPDF(\'bca.pdf\')" title="BCA Syllabus">BCA Syllabus</button></li>'+
        '<li><button onclick="viewPDF(\'B..B.A._Major_Syllabus_for_U.G.(Session_2021-22)_180.pdf\')" title="BBA Syllabus">BBA Syllabus</button></li>'+
        '<li><button onclick="viewPDF(\'LLB mgkvp.pdf\')" title="LLB Syllabus">LLB Syllabus</button></li>'+
        '<li><button onclick="viewPDF(\'B.A. LLB.pdf\')" title="BA LLB Integrated">BA LLB Integrated</button></li>'+
        '<li><button onclick="viewPDF(\'bca4.pdf\')" title="BCA 4th SEM PYQ">BCA 4th SEM PYQ</button></li>';
        break;
    case "INDIA":
        left_div.innerHTML = '';
        left_div.innerHTML = 
        '<li><button onclick="viewPDF(\'Constitution of India - In English.pdf\')" title="Constitution of India (English)">Constitution of India (English)</button></li>'+
        '<li><button onclick="viewPDF(\'Constitution of India - In Hindi.pdf\')" title="Constitution of India (Hindi)">Constitution of India (Hindi)</button></li>'+
        '<li><button onclick="viewPDF(\'IPC-2023.pdf\')" title="Indian Penal Code (IPC)">Indian Penal Code (IPC)</button></li>'+
        '<li><button onclick="viewPDF(\'ActsInChronological.pdf\')" title="Acts in Chronological Order">Acts in Chronological Order</button></li>'+
        '<li><button onclick="viewPDF(\'Companies_Act_1956_13jun2011.pdf\')" title="Companies Act-1956">Companies Act-1956</button></li>'+
        '<li><button onclick="viewPDF(\'CompaniesAct2013.pdf\')" title="Companies Act-2013">Companies Act-2013</button></li>'+
        '<li><button onclick="viewPDF(\'Uttar-Pradesh-District-Map-PDF.pdf\')" title="Uttar Pradesh Map">Uttar Pradesh Map</button></li>'+
        '<li><button onclick="viewPDF(\'AllIndiaPinCode.pdf\')" title="All India Pin Code">All India Pin Code</button></li>';
        break;
    case "AKTU":
        left_div.innerHTML = '';
        left_div.innerHTML = 
        '<li><button onclick="viewPDF(\'b_tech_aktu_syllabus.pdf\')" title="B.Tech Syllabus">B.Tech Syllabus</button></li>'+
        '<li><button onclick="viewPDF(\'Bachelor of Pharmacy I, II, III & IV Year syllabus 2019-2020 23 March 2021.pdf\')" title="B.Pharma Syllabus">B.Pharma Syllabus</button></li>'+
        '<li><button onclick="viewPDF(\'mca_aktu.pdf\')" title="MCA Syllabus">MCA Syllabus</button></li>';
        break;
    case "GK":
        left_div.innerHTML = '';
        left_div.innerHTML = 
        '<li><button onclick="viewPDF(\'R Guptas Popular Master Guide For CUET-UG General Test 2022.pdf\')" title="General Test">General Test</button></li>'+
        '<li><button onclick="viewPDF(\'R Guptas Popular Master Guide For CUET-UG English Language 2022.pdf\')" title="English Language">English Language</button></li>';
        break;
    case "BHU":
        left_div.innerHTML = '';
        left_div.innerHTML = 
        '<li><button onclick="viewPDF(\'BHU_bsc_Syllabus_220200403031403.pdf\')" title="BSc Syllabus">BSc Syllabus</button></li>'+
        '<li><button onclick="viewPDF(\'Computer_science_bhu_Syllabus_3206520221116024357.pdf\')" title="Computer Science">Computer Science</button></li>';
        break;
    case "Others":
        left_div.innerHTML = '';
        left_div.innerHTML = '';
        break;
    case "BOOKS":
        left_div.innerHTML = '';
        left_div.innerHTML = 
        '<li><button onclick="viewPDF(\'Accounting and Financial Management for BCA & MCA ( PDFDrive ).pdf\')" title="Accounting and Financial Management">Accounting and Financial Management</button></li>'+
        '<li><button onclick="viewPDF(\'AI_Russell_Norvig.pdf\')" title="Artificial Intelligence">Artificial Intelligence</button></li>'+
        '<li><button onclick="viewPDF(\'Big Data Principles and Paradigms.pdf\')" title="Big Data Principles and Paradigms">Big Data Principles and Paradigms</button></li>'+
        '<li><button onclick="viewPDF(\'BlockchainTechnologyApplications.pdf\')" title="Blockchain Technology Applications">Blockchain Technology Applications</button></li>'+
        '<li><button onclick="viewPDF(\'Business Economics (FndProg).pdf\')" title="Business Economics">Business Economics</button></li>'+
        '<li><button onclick="viewPDF(\'cloudcomputingbasics_aselfteachingintroduction.pdf\')" title="Cloud Computing Basic">Cloud Computing Basic</button></li>'+
        '<li><button onclick="viewPDF(\'CLOUD COMPUTING Principles and Paradigms.pdf\')" title="Cloud Computing Principles and Paradigms">Cloud Computing Principles and Paradigms</button></li>'+
        '<li><button onclick="viewPDF(\'Computer Architecture - PDF Room.pdf\')" title="Computer Architecture">Computer Architecture</button></li>'+
        '<li><button onclick="viewPDF(\'computer graphics and multimedia application.pdf\')" title="Computer Graphics and Multimedia Application">Computer Graphics and Multimedia Application</button></li>'+
        '<li><button onclick="viewPDF(\'Computer Organization and ArchitectureWilliam-Stallings-Designing-for-Performance-8th-Edition-Prentice-Hall-2011.pdf\')" title="Computer Organization and Architecture">Computer Organization and Architecture</button></li>'+
        '<li><button onclick="viewPDF(\'Computer_Network_And_Network_Security.pdf\')" title="Computer Network And Network Security">Computer Network And Network Security</button></li>'+
        '<li><button onclick="viewPDF(\'cryptography-and-network-security_-principles-and-practice-7th-global-edition.pdf\')" title="Cryptography and Network Security">Cryptography and Network Security</button></li>'+
        '<li><button onclick="viewPDF(\'cyber_security.pdf\')" title="Cyber Security">Cyber Security</button></li>'+
        '<li><button onclick="viewPDF(\'DATABASE MANAGEMENT SYSTEMS.pdf\')" title="Database Management System">Database Management System</button></li>'+
        '<li><button onclick="viewPDF(\'e_commerce.pdf\')" title="E-Commerce">E-Commerce</button></li>'+
        '<li><button onclick="viewPDF(\'graph theory and combinators.pdf\')" title="Graph Theory and Combinators">Graph Theory and Combinators</button></li>'+
        '<li><button onclick="viewPDF(\'Internet of things -IoT by Raj Kamal Text Book.pdf\')" title="Internet of Things">Internet of Things</button></li>'+
        '<li><button onclick="viewPDF(\'javanotes5.pdf\')" title="Java Programming">Java Programming</button></li>'+
        '<li><button onclick="viewPDF(\'js-linkedin.pdf\')" title="Javascript">Javascript</button></li>'+
        '<li><button onclick="viewPDF(\'knowledge-management-kimiz-dalkir.pdf\')" title="Knowledge Management">Knowledge Management</button></li>'+
        '<li><button onclick="viewPDF(\'Learning_Python.pdf\')" title="Learning Python">Learning Python</button></li>'+
        '<li><button onclick="viewPDF(\'let-us-c-authentic-guide-to-c-programming-language-19nbsped-9355512767-9789355512765.pdf\')" title="Let Us C">Let Us C</button></li>'+
        '<li><button onclick="viewPDF(\'Mathematics for Computer Science (2011 May book).pdf\')" title="Mathematics">Mathematics</button></li>'+
        '<li><button onclick="viewPDF(\'micropreocessor_intel_book.pdf\')" title="Microprocessor">Microprocessor</button></li>'+
        '<li><button onclick="viewPDF(\'NumericalMethods.pdf\')" title="Numerical Methods">Numerical Methods</button></li>'+
        '<li><button onclick="viewPDF(\'Operating_System_Concepts_8th_EditionA4.pdf\')" title="Operating System">Operating System</button></li>'+
        '<li><button onclick="viewPDF(\'Operations-Research-.pdf\')" title="Operations Research">Operations Research</button></li>'+
        '<li><button onclick="viewPDF(\'Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf\')" title="Software Engineering">Software Engineering</button></li>'+
        '<li><button onclick="viewPDF(\'Systemanalysisanddesign.pdf\')" title="System Analysis and Design">System Analysis and Design</button></li>'+
        '<li><button onclick="viewPDF(\'theory_of_computation_reference_e-book.pdf\')" title="Theory of Automata & Formal Languages">Theory of Automata & Formal Languages</button></li>'+
        '<li><button onclick="viewPDF(\'Web Technologies - A Computer Science Perspective.pdf\')" title="Web Technologies">Web Technologies</button></li>'+
        '<li><button onclick="viewPDF(\'books/a.pdf\')" title="Book1">Book1</button></li>';
        break;
    default:
        // Code block to be executed if expression doesn't match any case
}



}


// JavaScript for smooth horizontal scrolling
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.topic');
    navbar.addEventListener('wheel', function(event) {
        event.preventDefault();
        navbar.scrollLeft += event.deltaX;
    });
});

// JS for Responsiveness

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.querySelector(".left-div");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


