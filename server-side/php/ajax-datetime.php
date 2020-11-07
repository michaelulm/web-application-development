<?php

    // available europe timezones https://www.php.net/manual/de/timezones.europe.php
    // e.g.
    //  UTC+1 ajax-datetime.php?timezone=Europe%2FAmsterdam
    //  UTC+1 ajax-datetime.php?timezone=Europe%2FVienna
    //  UTC+0 timezone=Europe%2FDublin
    $timezone = isset($_GET["timezone"]) ? urldecode($_GET["timezone"]) : 'Europe/Vienna';

    $datetime = new DateTime();
    $timezone = new DateTimeZone($timezone);
    $datetime->setTimezone($timezone);

    // https://www.php.net/manual/de/function.date.php
    echo $datetime->format('Y-m-d H:i:s');