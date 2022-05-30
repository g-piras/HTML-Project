<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="LevelUp - A Valorant esports and tournament site"
    />
    <meta
      name="author"
      content="Abrate Francesco, Eloise Bryony Giorda, Davide Murroni Giampietro Piras, Federico Stroppiana"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
      integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- RESET CSS -->

    <link href="http://fonts.cdnfonts.com/css/valorant" rel="stylesheet" />
    <!-- gaming font -->

    <!-- title font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
      rel="stylesheet"
    />

    <!-- body font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&display=swap"
      rel="stylesheet"
    />

    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="./style/style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"> 

    <title>Valorant Esport</title>
   <!--  <style>
      body {
        color: white;
      }
      th,
      td {
        border: 1px solid black;
        text-align: center;
      }
      th {
        font-size: 13px;
      }

      td {
        font-size: 9px;
      }

      th {
        padding: 5px;
      }



    </style> -->
  </head>

  <body>
      <h1>LIST OF REGISTERED USERS</h1>
      <div>
          <table class="table">
              <tr>
              <thead style="font-size: 10px; text-align: center;">
                  <th>ID</th>
                  <th>FIRST NAME</th>
                  <th>MIDDLE NAME</th>
                  <th>LAST NAME</th>
                  <th>EMAIL</th>
                  <th>BATTLETAG</th>
                  <th>TEAMNAME</th>
                  <th>PHONE NUMBER</th>
                  <th>CITY</th>
                  <th>ADDRESS</th>
                  <th>COUNTRY</th>
                  <th>DATE OF BIRTH</th>
                  <th>GENDER</th>
                  <th>HAIR</th>
                  <th>EYES</th>
                  <th>TOURNAMENT</th>
                  <th>OTHER GAMES</th>
                  <th>BIOGRAPHY</th>
              </thead>
            </tr>

            <tbody style="font-size: 8px; text-align: center;">
              <?php
              $servername = "localhost";
              $username = "root";
              $password = "";
              $database = "levelupg_contact_db";

              $connection = new mysqli($servername, $username, $password, $database);

              if($connection->connect_error) {
                  die("connection failed " . $connection->connect_error);
              }

              $query = "SELECT * FROM players";
              $result = $connection->query($query);
              
              if (!$result) {
                die("Invalid query " . $connection->error);
              }
              while($row = $result->fetch_assoc()) {
              echo  "<tr>
                    <td>" . $row["Id"] ."</td>
                    <td>" . $row["firstName"] . "</td>
                    <td>" . $row["middleName"] . "</td>
                    <td>" . $row["surname"] . "</td>
                    <td>" . $row["mail"] . "</td>
                    <td>" . $row["battleTag"] . "</td>
                    <td>" . $row["teamName"] . "</td>
                    <td>" . $row["phone"] . "</td>
                    <td>" . $row["city"] . "</td>
                    <td>" . $row["userAddress"] . "</td>
                    <td>" . $row["country"] . "</td>
                    <td>" . $row["age"] . "</td>
                    <td>" . $row["gender"] . "</td>
                    <td>" . $row["hair"] . "</td>
                    <td>" . $row["eyes"] . "</td>
                    <td>" . $row["tournament"] . "</td>
                    <td>" . $row["otherGames"] . "</td>
                    <td>" . $row["bio"] . "</td>
                </tr> ";
              }
              ?>
            </tbody>
          </table>
      </div>
  </body>