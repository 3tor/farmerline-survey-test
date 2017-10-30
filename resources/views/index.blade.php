
<!DOCTYPE html>

<!-- define angular app -->
<html ng-app="bookWishlistApp">

<head>
 <!--  <base href="/"> -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1"> 
  
   <title>Survey</title>
   <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" /> 

        <link href="bower_components/bootstrap/bootstrap.min.css" rel="stylesheet">

        <script src="bower_components/angular/angular.min.js"></script>
        <!--<script src="bower_components/lodash/lodash.min.js"></script>-->
        <script src="bower_components/angular-route/angular-route.min.js"></script>
        <!--<script src="bower_components/angular-local-storage/dist/angular-local-storage.min.js"></script>-->
        <!--<script src="bower_components/restangular/dist/restangular.min.js"></script>-->
        <script src="js/main.js"></script>
        <script src="js/controllers.js"></script>
        <script src="js/services.js"></script>
 
</head>

<!-- define angular controller -->
<body>

  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Survey Center</a>
      </div>

    </div>
  </nav>

  <div id="main">
  
    <!-- angular templating -->
		<!-- this is where content will be injected -->
    <div ng-view></div>
    
  </div>
  
  <footer class="text-center">
    <p>View the test on <a target="_blank" href="https://github.com/3tor/farmerline-survey-test">GitHub</a></p>
  
    <p>Done by <a href="/">Etornam</a></p>
  </footer>
  

  <script src="bower_components/jquery.js"></script>
  <script src="bower_components/bootstrap.js"></script>

</body>

</html>