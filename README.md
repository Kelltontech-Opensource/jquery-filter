# jquery-filter

## About
jquery Filter: filter selection and return selected options only

##Options
<div class="filters padding-hz10" id="mixfilters">
	<h4 class="no-margin padding-vr10 course-menu-head">Refine:</h4>
    <h5 class="margin-top10-margin-bottom0">City:</h5>
    <ul class="list-unstyled no-margin filtmedia">
    	<li>
    		<div class="checkbox no-padding">
    			<div class="radio i-checks">
    				<label class="filtelem">
    					<input class="filter pull" data-val="" data-name="" type="checkbox" name="city" value="Gurgaon">
                        &nbsp;&nbsp; Gurgaon
                    </label>
                </div>
            </div>
        </li>
	</ul>
</div>
<script>
	var filter = $('#mixfilters').filter(
		{
			debug : true/ false;
			});
			</script>
## Methods 
	filter.appliedFilters();
## Features

This plugin can be used to get the selected filters only.

For now it supports checkbox and radio only.

Easy debugging as it contains debug flag, If flag is true it consoles all available properties and selected entities.

Easy to contribute, easy tp understand.

## How to Use 
	1 - Add attribute name and vlaue in input types. 
	2 - Selected Options Json format will be something like {name1:[val1,val2],nmae2:[val1,val2]}
	3 - Filters = $('#mixfilters').filter(); - call plugin with filter.
	4 - Filters variable will contain complete object of filters
	5 - Filters.appliedFilters(); - appliedFilters method will return all selected options.
### download from github follow the steps to configure html call method with options.

## Requirement 
  jQuery 1.7+

## End 
                  
