<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dashboard Page</title>

    <link rel="icon" type="image/x-icon" href="assets/img/favicon.png">

    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }} ">

    <link rel="stylesheet" href="{{ asset('assets/css/lnr-icon.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/css/font-awesome.min.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap-datetimepicker.min.css') }} ">

    <link rel="stylesheet" href="{{ asset('assets/plugins/select2/select2.min.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/plugins/fullcalendar/fullcalendar.min.css') }}">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">

    <!--[if lt IE 9]>
        <script src="assets/js/html5shiv.min.js"></script>
            <script src="assets/js/respond.min.js"></script>
            <![endif]-->
</head>

<body>

    <div id="app"></div>

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('assets/js/jquery-3.2.1.min.js') }}"></script>

    <script src="{{ asset('assets/js/popper.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>

    <script src="{{ asset('assets/plugins/theia-sticky-sidebar/ResizeSensor.js') }}"></script>
    <script src="{{ asset('assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js') }}"></script>

    <script src="{{ asset('assets/js/Chart.min.js') }}"></script>
    <script src="{{ asset('assets/js/chart.js') }}"></script>

    <script src="{{ asset('assets/plugins/select2/moment.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap-datetimepicker.min.js') }}"></script>

    <script src="{{ asset('assets/plugins/select2/select2.min.js') }}"></script>

    <script src="{{ asset('assets/js/jquery-ui.min.js') }}"></script>

    {{-- <script src="{{ asset('assets/plugins/fullcalendar/fullcalendar.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/fullcalendar/jquery.fullcalendar.js') }}"></script> --}}

    <script src="{{ asset('assets/js/script.js') }}"></script>

</body>

</html>
