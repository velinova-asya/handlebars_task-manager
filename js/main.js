// ===================================================================

// 						COUNT TASKS

// ===================================================================

function countTasks() {
		
		$('.tasks_counter').each(function() {
			
			var counter = $(this),
				currentLi = counter.closest('.whole_column').find('li'),
				numberOfTasks = currentLi.length;

			counter.text(numberOfTasks);
		});
}


// ===================================================================

// 			MAKE HEIGHTS 0F BODY, #tasks_div AND WINDOW EQUAL

// ===================================================================

function setHeight() {
    var windowHeight = $(window).innerHeight();
    $('body').css('min-height', windowHeight);
    $('#tasks_div').css('min-height', windowHeight);
};


// ===================================================================

// 				CALL FUNCTIONS ON RESIZE

// ===================================================================

$(window).resize(function() {
    setHeight();
});


// ===================================================================

// 			CREATE addNewTask() WITH FOCUSED INPUT

// ===================================================================

function addNewTask(inputParam) {

	var newTask = inputParam.val(),

		person = inputParam.closest('.column_info_container').find('input[name=person]:checked').val();

	if (newTask.length > 0) {
		
		var currentColumn = inputParam.closest('.column_info_container').find('.columns-ul');
		
		if (person != undefined) {
			currentColumn.append(
						"<li>" + 
							"<a href='#' class='task_link'>" + newTask + "</a>" +
							"<span class='pic_span'><img src=images/"+person+".png></span>" + 
						"</li>"
			);
		} else {
			currentColumn.append(
				"<li>" + 
					"<a href='#' class='task_link'>" + newTask + "</a>" +
					"<span class='pic_span'><img src=images/not_asigned.png></span>" + 
				"</li>"
			);
		}

		inputParam.val("");
	}		
}

// ===================================================================

// 			CREATE addBtnClick() WITH FOCUSED INPUT
// 			CALL addNewTask(inputParam) AND countTasks();

// ===================================================================

function addBtnClick(inputParam) {
	
	var currentAddBtnSmall = inputParam.closest('.column_info_container').find('.addBtnSmall');
	
	currentAddBtnSmall.on('click', function(e) {
		e.preventDefault();
    	addNewTask(inputParam);
    	countTasks();
    	currentAddBtnSmall.off('click');
	});
}


// ===================================================================
// ===================================================================

// 					DOCUMENT READY

// ===================================================================
// ===================================================================

$(document).ready(function() {


	// ================================================================

	// 					HEADER ACTIVE LINK

	// ================================================================

	var activeLink = 'header ul li a.header_a';

	$(activeLink).on('click', function() {
		$(activeLink).removeClass('active_nav');
		$(this).addClass('active_nav');
	});


	// ================================================================

	// 					HANDLEBARS SCRIPT

	// ================================================================
    
    /* globals document, Handlebars */

    var waitingList,
        waitingListTemplateHtml,
        waitingListTemplate,

        progressList,
        progressListTemplateHtml,
        progressListTemplate,

        reviewList,
        reviewListTemplateHtml,
        reviewListTemplate;



    // WAITING LIST
    waitingList = [{
        task: 'Waiting Task 01Waiting Task 01Waiting Task 01Waiting Task 0101Waiting Task 01',
        asigned: 'images/pesho.png'
    }, {
        task: 'Waiting Task 02',
        asigned: 'images/pesho.png'
    }, {
        task: 'Waiting Task 03',
        asigned: 'images/pesho.png'
    }, {
        task: 'Waiting Task 04',
        asigned: 'images/pesho.png',
    }, {
        task: 'Waiting Task 05',
        asigned: 'images/gosho.png'
    }, {
        task: 'Waiting Task 06',
        asigned: 'images/gosho.png'
    }, {
        task: 'Waiting Task 07',
        asigned: 'images/gosho.png',
    }, {
        task: 'Waiting Task 08',
        asigned: 'images/spas.png'
    }, {
        task: 'Waiting Task 09',
        asigned: 'images/gosho.png'
    }, {
        task: 'Waiting Task 10',
        asigned: 'images/mimi.png'
    }];

    waitingListTemplateHtml = document.getElementById('waiting-list-template').innerHTML;
    waitingListTemplate = Handlebars.compile(waitingListTemplateHtml);
    document.getElementById('column_1').innerHTML = waitingListTemplate({waitingList: waitingList});

    // PROGRESS LIST
    progressList = [{
        task: 'In Progress Task 01',
        asigned: 'images/mimi.png'
    }, {
        task: 'In Progress Task 02',
        asigned: 'images/mimi.png'
    }, {
        task: 'In Progress Task 03',
        asigned: 'images/gosho.png'
    }, {
        task: 'In Progress Task 04',
        asigned: 'images/gosho.png',
    }, {
        task: 'In Progress Task 05',
        asigned: 'images/spas.png'
    }, {
        task: 'In Progress Task 06',
        asigned: 'images/spas.png'
    }];

    progressListTemplateHtml = document.getElementById('progress-list-template').innerHTML;
    progressListTemplate = Handlebars.compile(progressListTemplateHtml);
    document.getElementById('column_2').innerHTML = progressListTemplate({progressList: progressList});

    // REVIEW LIST
    reviewList = [{
        task: 'Review/Confirm Task 01',
        asigned: 'images/spas.png'
    }, {
        task: 'Review/Confirm Task 02',
        asigned: 'images/spas.png'
    }, {
        task: 'Review/Confirm Task 03',
        asigned: 'images/spas.png'
    }, {
        task: 'Review/Confirm Task 04',
        asigned: 'images/gosho.png',
    }, {
        task: 'Review/Confirm Task 05',
        asigned: 'images/gosho.png'
    }, {
        task: 'Review/Confirm Task 06',
        asigned: 'images/mimi.png',
    }, {
        task: 'Review/Confirm Task 08',
        asigned: 'images/mimi.png'
    }, {
        task: 'Review/Confirm Task 09',
        asigned: 'images/mimi.png'
    }, {
        task: 'Review/Confirm Task 10',
        asigned: 'images/pesho.png',
    }, {
        task: 'Review/Confirm Task 11',
        asigned: 'images/pesho.png',
    }, {
        task: 'Review/Confirm Task 12',
        asigned: 'images/pesho.png'
    }];

    reviewListTemplateHtml = document.getElementById('review-list-template').innerHTML;
    reviewListTemplate = Handlebars.compile(reviewListTemplateHtml);
    document.getElementById('column_3').innerHTML = reviewListTemplate({reviewList: reviewList});



	// ================================================================

	// 					SHOW ADD INPUT

	// ================================================================

	$('.addBtn').on('click', function() {
		$(this).closest('.add_container').find('.add_div').toggle();
	});


	// ================================================================

	// 					GET FOCUSED INPUT
	//					CALL addBtnClick()

	// ================================================================	

	$('.add_input').on('focus',function() {
		var currentInput = $(this);
		addBtnClick(currentInput);
	});



	// CALL FUNCTIONS
	countTasks();
	setHeight();

});